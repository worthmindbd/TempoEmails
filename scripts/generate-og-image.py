import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 2x supersampling for crisp edges
W, H = 2400, 1260
FINAL_W, FINAL_H = 1200, 630

# Base dark canvas #0c0d12
img = Image.new("RGBA", (W, H), (11, 12, 17, 255))

# Atmospheric Ambient Lighting Glows
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

# 1. Main orange/coral ambient radial glow behind hero card
cx1, cy1 = int(W * 0.74), int(H * 0.44)
for r in range(1050, 0, -15):
    alpha = int(50 * (1.0 - r / 1050.0) ** 1.85)
    glow_draw.ellipse([cx1 - r, cy1 - r, cx1 + r, cy1 + r], fill=(234, 40, 4, alpha))

# 2. Warm ambient light top left
cx2, cy2 = int(W * 0.16), int(H * 0.12)
for r in range(850, 0, -20):
    alpha = int(36 * (1.0 - r / 850.0) ** 2.1)
    glow_draw.ellipse([cx2 - r, cy2 - r, cx2 + r, cy2 + r], fill=(255, 106, 61, alpha))

# 3. Soft violet/indigo depth glow bottom center-left
cx3, cy3 = int(W * 0.35), int(H * 0.96)
for r in range(900, 0, -25):
    alpha = int(24 * (1.0 - r / 900.0) ** 2.0)
    glow_draw.ellipse([cx3 - r, cy3 - r, cx3 + r, cy3 + r], fill=(130, 60, 220, alpha))

img = Image.alpha_composite(img, glow_layer)

# Background subtle dot grid
dots_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dots_draw = ImageDraw.Draw(dots_layer)
grid_spacing = 64
for x in range(32, W, grid_spacing):
    for y in range(32, H, grid_spacing):
        dots_draw.ellipse([x-2, y-2, x+2, y+2], fill=(255, 255, 255, 12))
img = Image.alpha_composite(img, dots_layer)
draw = ImageDraw.Draw(img)

# Fonts
font_dir = "/usr/share/fonts/truetype/ubuntu/"
font_display_huge = ImageFont.truetype(font_dir + "Ubuntu-B.ttf", 100)
font_brand = ImageFont.truetype(font_dir + "Ubuntu-B.ttf", 62)
font_h2 = ImageFont.truetype(font_dir + "Ubuntu-B.ttf", 46)
font_h3 = ImageFont.truetype(font_dir + "Ubuntu-B.ttf", 36)
font_body = ImageFont.truetype(font_dir + "Ubuntu-R.ttf", 35)
font_body_sm = ImageFont.truetype(font_dir + "Ubuntu-R.ttf", 29)
font_mono_bold = ImageFont.truetype(font_dir + "UbuntuMono-B.ttf", 40)
font_mono_med = ImageFont.truetype(font_dir + "UbuntuMono-B.ttf", 32)
font_mono_sm = ImageFont.truetype(font_dir + "UbuntuMono-B.ttf", 28)
font_otp_digits = ImageFont.truetype(font_dir + "UbuntuMono-B.ttf", 78)

def draw_glass_card(target_img, bbox, fill_color, border_color, radius=32, border_width=3):
    card = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    c_draw = ImageDraw.Draw(card)
    c_draw.rounded_rectangle(bbox, radius=radius, fill=fill_color, outline=border_color, width=border_width)
    return Image.alpha_composite(target_img, card)

# Vector Icon Drawing Helpers
def draw_lightning(target_draw, cx, cy, size=24, color=(255, 106, 61, 255)):
    s = size / 24.0
    pts = [
        (cx - 2*s, cy - 14*s),
        (cx + 8*s, cy - 14*s),
        (cx + 1*s, cy - 2*s),
        (cx + 10*s, cy - 2*s),
        (cx - 8*s, cy + 14*s),
        (cx - 3*s, cy + 2*s),
        (cx - 10*s, cy + 2*s),
    ]
    target_draw.polygon(pts, fill=color)

def draw_shield(target_draw, cx, cy, size=24, color=(52, 211, 153, 255)):
    s = size / 24.0
    pts = [
        (cx - 10*s, cy - 12*s),
        (cx + 10*s, cy - 12*s),
        (cx + 10*s, cy + 2*s),
        (cx, cy + 14*s),
        (cx - 10*s, cy + 2*s),
    ]
    target_draw.polygon(pts, fill=color)
    target_draw.line([(cx - 4*s, cy), (cx - 1*s, cy + 4*s), (cx + 5*s, cy - 4*s)], fill=(12, 13, 18, 255), width=int(3*s))

def draw_lock(target_draw, cx, cy, size=24, color=(96, 165, 250, 255)):
    s = size / 24.0
    target_draw.rounded_rectangle([cx - 9*s, cy - 2*s, cx + 9*s, cy + 12*s], radius=int(3*s), fill=color)
    target_draw.arc([cx - 6*s, cy - 12*s, cx + 6*s, cy + 2*s], start=180, end=0, fill=color, width=int(3.5*s))

def draw_clock(target_draw, cx, cy, size=24, color=(192, 132, 252, 255)):
    s = size / 24.0
    target_draw.ellipse([cx - 11*s, cy - 11*s, cx + 11*s, cy + 11*s], outline=color, width=int(3.5*s))
    target_draw.line([(cx, cy - 6*s), (cx, cy), (cx + 5*s, cy)], fill=color, width=int(3.5*s))

def draw_copy_icon(target_draw, cx, cy, size=24, color=(255, 255, 255, 255)):
    s = size / 24.0
    target_draw.rounded_rectangle([cx - 9*s, cy - 5*s, cx + 3*s, cy + 9*s], radius=int(2*s), outline=color, width=int(2.5*s))
    target_draw.rounded_rectangle([cx - 4*s, cy - 10*s, cx + 8*s, cy + 4*s], radius=int(2*s), fill=None, outline=color, width=int(2.5*s))

def draw_refresh_icon(target_draw, cx, cy, size=20, color=(140, 145, 165, 255)):
    s = size / 20.0
    target_draw.arc([cx - 8*s, cy - 8*s, cx + 8*s, cy + 8*s], start=45, end=315, fill=color, width=int(2.5*s))
    pts = [(cx + 4*s, cy - 10*s), (cx + 10*s, cy - 8*s), (cx + 7*s, cy - 3*s)]
    target_draw.polygon(pts, fill=color)

# --- LEFT COLUMN: BRANDING & HERO TEXT ---
margin_x = 100
curr_y = 110

# 1. Header: Official Logo + Brand Name + Status Pill
logo_path = os.path.join(os.path.dirname(__file__), "../public/android-chrome-512x512.png")
if not os.path.exists(logo_path):
    logo_path = "/home/worthmind/Coding/TempoEmails/public/android-chrome-512x512.png"

logo_src = Image.open(logo_path).convert("RGBA")
logo_scaled = logo_src.resize((96, 96), Image.Resampling.LANCZOS)
img.paste(logo_scaled, (margin_x, curr_y), logo_scaled)
draw = ImageDraw.Draw(img)

# Brand Text
brand_text_x = margin_x + 96 + 22
brand_text_y = curr_y + 14
draw.text((brand_text_x, brand_text_y), "Tempo", font=font_brand, fill=(255, 255, 255, 255))
w_tempo = draw.textlength("Tempo", font=font_brand)

# Gradient text for "Emails"
emails_x = brand_text_x + w_tempo
draw.text((emails_x, brand_text_y), "Emails", font=font_brand, fill=(255, 106, 61, 255))
w_emails = draw.textlength("Emails", font=font_brand)

# Header Badge (Pill)
pill_x = int(emails_x + w_emails + 30)
pill_y = curr_y + 20
pill_w = 285
pill_h = 56
img = draw_glass_card(img, [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], (30, 32, 44, 210), (60, 64, 85, 220), radius=28)
draw = ImageDraw.Draw(img)
draw.ellipse([pill_x + 22, pill_y + 21, pill_x + 36, pill_y + 35], fill=(34, 197, 94, 255))
draw.text((pill_x + 48, pill_y + 13), "100% FREE & PRIVATE", font=font_mono_sm, fill=(205, 215, 235, 255))

# 2. Main Hero Headline
curr_y = 280
draw.text((margin_x, curr_y), "Temporary email.", font=font_display_huge, fill=(255, 255, 255, 255))
curr_y += 120

# "Instant privacy." with horizontal gradient text
text_privacy = "Instant privacy."
privacy_w = int(draw.textlength(text_privacy, font=font_display_huge))
privacy_h = 130

# Create gradient mask for "Instant privacy."
p_mask = Image.new("L", (privacy_w + 30, privacy_h), 0)
pm_draw = ImageDraw.Draw(p_mask)
pm_draw.text((0, 0), text_privacy, font=font_display_huge, fill=255)

p_grad = Image.new("RGBA", (privacy_w + 30, privacy_h), (0, 0, 0, 0))
pg_draw = ImageDraw.Draw(p_grad)
for gx in range(privacy_w + 30):
    factor = gx / float(privacy_w + 30)
    # Gradient from #EA2804 to #FF6A3D to #EA2804
    if factor < 0.5:
        sub_f = factor * 2.0
        r = int(234 + sub_f * (255 - 234))
        g = int(40 + sub_f * (106 - 40))
        b = int(4 + sub_f * (61 - 4))
    else:
        sub_f = (factor - 0.5) * 2.0
        r = int(255 - sub_f * (255 - 234))
        g = int(106 - sub_f * (106 - 40))
        b = int(61 - sub_f * (61 - 4))
    pg_draw.line([(gx, 0), (gx, privacy_h)], fill=(r, g, b, 255))

p_grad.putalpha(p_mask)
img.paste(p_grad, (margin_x, curr_y), p_grad)
draw = ImageDraw.Draw(img)

# 3. Subtitle / Value Proposition
curr_y += 140
draw.text((margin_x, curr_y), "Generate a disposable burner inbox in one click.", font=font_body, fill=(185, 190, 205, 255))
curr_y += 50
draw.text((margin_x, curr_y), "Auto-extract verification codes, OTPs & activation links.", font=font_body, fill=(185, 190, 205, 255))

# 4. Feature Badges (Grid of 4 Glass Pills)
curr_y += 95
badges = [
    ("Auto OTP Extraction", "lightning", (234, 40, 4, 35), (234, 40, 4, 190), (255, 130, 80, 255)),
    ("100% Anonymous", "lock", (30, 50, 80, 180), (60, 100, 160, 200), (145, 195, 255, 255)),
    ("Zero Logs Kept", "shield", (20, 50, 40, 180), (45, 115, 80, 200), (90, 230, 160, 255)),
    ("10m - 30d Lifespan", "clock", (45, 30, 65, 180), (110, 70, 145, 200), (225, 170, 255, 255)),
]

bx = margin_x
by = curr_y
badge_idx = 0
for text, icon_type, bg_col, border_col, text_col in badges:
    tw = draw.textlength(text, font=font_body_sm)
    bw = int(tw + 90)
    bh = 68
    if badge_idx == 2:
        bx = margin_x
        by += 86
    
    img = draw_glass_card(img, [bx, by, bx + bw, by + bh], bg_col, border_col, radius=34)
    draw = ImageDraw.Draw(img)
    
    icon_cx = bx + 42
    icon_cy = by + bh // 2
    if icon_type == "lightning":
        draw_lightning(draw, icon_cx, icon_cy, size=24, color=text_col)
    elif icon_type == "lock":
        draw_lock(draw, icon_cx, icon_cy, size=24, color=text_col)
    elif icon_type == "shield":
        draw_shield(draw, icon_cx, icon_cy, size=24, color=text_col)
    elif icon_type == "clock":
        draw_clock(draw, icon_cx, icon_cy, size=24, color=text_col)
        
    draw.text((bx + 70, by + 18), text, font=font_body_sm, fill=text_col)
    bx += bw + 20
    badge_idx += 1


# 5. Bottom Brand & Trust Bar
bottom_y = 1110
bottom_bbox = [margin_x, bottom_y, W - margin_x, bottom_y + 84]
img = draw_glass_card(img, bottom_bbox, (18, 20, 28, 220), (45, 48, 65, 220), radius=26)
draw = ImageDraw.Draw(img)
draw.text((margin_x + 36, bottom_y + 24), "tempoemails.com", font=font_mono_bold, fill=(255, 255, 255, 255))
draw.text((margin_x + 430, bottom_y + 26), "•  Free Burner Mail  •  Discord, Steam, OpenAI Ready  •  Zero Logs", font=font_body_sm, fill=(155, 160, 180, 255))


# --- RIGHT COLUMN: INTERACTIVE MAILBOX UI MOCKUP ---
card_x1 = 1200
card_y1 = 115
card_x2 = 2300
card_y2 = 1045

# Glow shadow behind card
card_glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cg_draw = ImageDraw.Draw(card_glow)
cg_draw.rounded_rectangle([card_x1 - 14, card_y1 - 14, card_x2 + 14, card_y2 + 14], radius=46, fill=(234, 40, 4, 45))
card_glow = card_glow.filter(ImageFilter.GaussianBlur(40))
img = Image.alpha_composite(img, card_glow)

# Main Card Shell
img = draw_glass_card(img, [card_x1, card_y1, card_x2, card_y2], (18, 19, 27, 245), (234, 40, 4, 120), radius=40, border_width=3)
draw = ImageDraw.Draw(img)

# Top highlight accent line on card
card_highlight = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ch_draw = ImageDraw.Draw(card_highlight)
ch_draw.line([(card_x1 + 60, card_y1 + 1), (card_x2 - 60, card_y1 + 1)], fill=(255, 106, 61, 180), width=3)
img = Image.alpha_composite(img, card_highlight)
draw = ImageDraw.Draw(img)

# Card Header Bar
h_y = card_y1 + 38
# Window controls
draw.ellipse([card_x1 + 44, h_y + 8, card_x1 + 66, h_y + 30], fill=(239, 68, 68, 255))
draw.ellipse([card_x1 + 78, h_y + 8, card_x1 + 100, h_y + 30], fill=(234, 179, 8, 255))
draw.ellipse([card_x1 + 112, h_y + 8, card_x1 + 134, h_y + 30], fill=(34, 197, 94, 255))

draw.text((card_x1 + 165, h_y + 2), "Active Burner Inbox", font=font_h3, fill=(235, 235, 245, 255))

# Active Status Badge
sb_w = 215
sb_x = card_x2 - sb_w - 44
img = draw_glass_card(img, [sb_x, h_y - 6, sb_x + sb_w, h_y + 46], (34, 197, 94, 30), (34, 197, 94, 180), radius=22)
draw = ImageDraw.Draw(img)
draw.ellipse([sb_x + 22, h_y + 14, sb_x + 36, h_y + 28], fill=(34, 197, 94, 255))
draw.text((sb_x + 48, h_y + 7), "LIVE INBOX", font=font_mono_sm, fill=(74, 222, 128, 255))

# Header divider
draw.line([(card_x1 + 40, card_y1 + 105), (card_x2 - 40, card_y1 + 105)], fill=(40, 42, 58, 220), width=2)

# Email Address Display Input Island
box_y = card_y1 + 135
img = draw_glass_card(img, [card_x1 + 40, box_y, card_x2 - 40, box_y + 115], (10, 11, 16, 240), (55, 58, 78, 220), radius=24)
draw = ImageDraw.Draw(img)

# Email address string
email_address = "alex.burner@tempoemails.com"
draw.text((card_x1 + 68, box_y + 36), email_address, font=font_mono_bold, fill=(255, 255, 255, 255))

# Copy Button (Vibrant Orange Pill)
btn_w = 170
btn_x = card_x2 - 40 - btn_w - 20
btn_y = box_y + 20
img = draw_glass_card(img, [btn_x, btn_y, btn_x + btn_w, btn_y + 75], (234, 40, 4, 240), (255, 106, 61, 255), radius=18)
draw = ImageDraw.Draw(img)
draw_copy_icon(draw, btn_x + 40, btn_y + 38, size=26, color=(255, 255, 255, 255))
draw.text((btn_x + 64, btn_y + 18), "COPY", font=font_mono_bold, fill=(255, 255, 255, 255))

# Sub-status under email bar
draw_clock(draw, card_x1 + 58, box_y + 148, size=20, color=(140, 145, 165, 255))
draw.text((card_x1 + 78, box_y + 134), "Lifespan: 23h 59m remaining", font=font_mono_sm, fill=(140, 145, 165, 255))

draw_refresh_icon(draw, card_x2 - 310, box_y + 148, size=20, color=(140, 145, 165, 255))
draw.text((card_x2 - 290, box_y + 134), "Auto-refreshing (5s)", font=font_mono_sm, fill=(140, 145, 165, 255))

# Simulated Incoming Email Item (Glass Card)
inbox_y = box_y + 190
img = draw_glass_card(img, [card_x1 + 40, inbox_y, card_x2 - 40, card_y2 - 35], (25, 27, 39, 230), (234, 40, 4, 90), radius=28)
draw = ImageDraw.Draw(img)

# Discord Icon / Avatar Circle
avatar_cx = card_x1 + 80
avatar_cy = inbox_y + 54
draw.ellipse([avatar_cx - 28, avatar_cy - 28, avatar_cx + 28, avatar_cy + 28], fill=(88, 101, 242, 255))
draw.text((avatar_cx - 13, avatar_cy - 23), "D", font=font_h2, fill=(255, 255, 255, 255))

# Email Sender & Time
draw.text((card_x1 + 125, inbox_y + 32), "Discord Security", font=font_h2, fill=(255, 255, 255, 255))
draw.text((card_x2 - 205, inbox_y + 38), "Just now", font=font_mono_sm, fill=(130, 135, 155, 255))

draw.text((card_x1 + 125, inbox_y + 88), "Subject: Your 6-digit verification security code", font=font_body, fill=(185, 190, 210, 255))

# OTP Extraction Highlight Container (Hero Feature)
otp_box_y = inbox_y + 152
img = draw_glass_card(img, [card_x1 + 70, otp_box_y, card_x2 - 70, otp_box_y + 180], (234, 40, 4, 30), (234, 40, 4, 210), radius=24)
draw = ImageDraw.Draw(img)

# OTP Badge
otp_badge_w = 340
img = draw_glass_card(img, [card_x1 + 95, otp_box_y + 20, card_x1 + 95 + otp_badge_w, otp_box_y + 68], (234, 40, 4, 230), (255, 106, 61, 255), radius=16)
draw = ImageDraw.Draw(img)
draw_lightning(draw, card_x1 + 120, otp_box_y + 44, size=22, color=(255, 255, 255, 255))
draw.text((card_x1 + 140, otp_box_y + 26), "AUTO-DETECTED OTP", font=font_mono_sm, fill=(255, 255, 255, 255))

# Big Glowing OTP Digits
otp_code = "849  201"
draw.text((card_x1 + 95, otp_box_y + 90), otp_code, font=font_otp_digits, fill=(255, 255, 255, 255))

# One-Click Copy OTP Button
otp_copy_w = 260
otp_copy_x = card_x2 - 70 - otp_copy_w - 20
otp_copy_y = otp_box_y + 75
img = draw_glass_card(img, [otp_copy_x, otp_copy_y, otp_copy_x + otp_copy_w, otp_copy_y + 75], (36, 38, 52, 240), (234, 40, 4, 200), radius=20)
draw = ImageDraw.Draw(img)
draw_copy_icon(draw, otp_copy_x + 40, otp_copy_y + 38, size=24, color=(255, 106, 61, 255))
draw.text((otp_copy_x + 68, otp_copy_y + 20), "Copy Code", font=font_mono_bold, fill=(255, 106, 61, 255))

# Final Lanczos Downsampling to standard 1200x630
final_img = img.resize((FINAL_W, FINAL_H), Image.Resampling.LANCZOS)

output_path = os.path.join(os.path.dirname(__file__), "../public/og-image.png")
final_img.save(output_path, "PNG", optimize=True)
print(f"Generated and saved social preview thumbnail to {output_path} (1200x630)")
