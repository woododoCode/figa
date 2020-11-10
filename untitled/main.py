import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
a = os.path.join(BASE_DIR, '/static/')
print(a)
