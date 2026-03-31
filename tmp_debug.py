with open(r'c:\Prototype\MBLB\Bidang Pendaftaran\berkas-online.html', 'rb') as f:
    lines = f.readlines()
    line_305 = lines[304] # 0-indexed
    print(f"Line 305 bytes: {line_305}")
    print(f"Characters: {[chr(b) for b in line_305]}")
