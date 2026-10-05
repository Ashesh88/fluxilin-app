import os
import glob

def replace_in_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Backgrounds
    content = content.replace("bg-[#08080A]", "bg-base")
    content = content.replace("bg-[#0F0F13]", "bg-surface")
    content = content.replace("bg-[#13131A]", "bg-card")
    content = content.replace("bg-white/5", "bg-card")
    content = content.replace("hover:bg-[#1A1A24]", "hover:bg-card-hover")
    content = content.replace("hover:bg-white/10", "hover:bg-card-hover")
    content = content.replace("bg-[#0A0A0D]", "bg-base")
    
    # Text
    content = content.replace("text-white", "text-main")
    content = content.replace("text-[#8B8BA7]", "text-muted")
    content = content.replace("text-[#4B4B63]", "text-subtle")
    content = content.replace("text-[#F8F8FC]", "text-main")
    content = content.replace("hover:text-white", "hover:text-main")
    
    # Borders
    content = content.replace("border-white/5", "border-border-subtle")
    content = content.replace("border-white/10", "border-border")
    content = content.replace("border-white/15", "border-border")
    content = content.replace("border-white/8", "border-border-subtle")
    
    # Dividers/lines
    content = content.replace("bg-white/15", "bg-border")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

for filepath in glob.glob("src/**/*.tsx", recursive=True):
    replace_in_file(filepath)
