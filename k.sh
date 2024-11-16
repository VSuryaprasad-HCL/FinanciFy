find . -name "__pycache__" > pycach.txt


while IFS= read -r file; do
  rm -rf "$file"  # Remove the file (use -f to force remove without confirmation)
done < pycach.txt

rm pycach.txt
