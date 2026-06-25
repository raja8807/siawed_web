import re

filepath = r"e:\self\NOD Projects\siawed\siawed_web\src\components\layout\Header\Header.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replacements
replacements = {
    r"&#128205;": "<GeoAltFill />",
    r"&#128222;": "<TelephoneFill />",
    r"&#9993;": "<EnvelopeFill />",
    r"&#127760;": "<Globe />",
    r"&#9660;": "<ChevronDown />",
    r"&#9829;": "<HeartFill />",
    r"&#8962;": "<House />",
    r"&#9881;": "<Gear />",
    r"&#128188;": "<Briefcase />",
    r"&#128101;": "<People />",
    r"&#9776;": "<List />"
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Add imports
import_statement = """import { 
  GeoAltFill, TelephoneFill, EnvelopeFill, Globe, 
  ChevronDown, HeartFill, House, Gear, Briefcase, People, List 
} from "react-bootstrap-icons";\n"""

# Insert after styles import
content = re.sub(r'(import styles from "\./Header\.module\.scss";\n)', r'\1' + import_statement, content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
