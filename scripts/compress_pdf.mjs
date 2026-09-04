import fs from 'fs';
import path from 'path';
import { PDFDocument, PDFName } from 'pdf-lib';

export async function compressPdf(filePath) {
  const targetPath = filePath || path.resolve('public/images/MODERN BIOTECH BROSHURE - 1.pdf');
  if (!fs.existsSync(targetPath)) {
    console.error(`File not found: ${targetPath}`);
    return;
  }

  const fileBytes = fs.readFileSync(targetPath);
  const originalSizeMB = (fileBytes.length / (1024 * 1024)).toFixed(2);
  console.log(`Processing: ${targetPath} (Original: ${originalSizeMB} MB)`);

  const srcDoc = await PDFDocument.load(fileBytes);
  const outDoc = await PDFDocument.create();

  // Strip Photoshop internal metadata/layers
  srcDoc.getPages().forEach((page) => {
    if (page.node.has(PDFName.of('PieceInfo'))) {
      page.node.delete(PDFName.of('PieceInfo'));
    }
  });

  const pageIndices = srcDoc.getPageIndices();
  const copiedPages = await outDoc.copyPages(srcDoc, pageIndices);
  copiedPages.forEach((p) => {
    if (p.node.has(PDFName.of('PieceInfo'))) {
      p.node.delete(PDFName.of('PieceInfo'));
    }
    outDoc.addPage(p);
  });

  const savedBytes = await outDoc.save();
  fs.writeFileSync(targetPath, savedBytes);

  const newSizeMB = (savedBytes.length / (1024 * 1024)).toFixed(2);
  console.log(`✅ Saved lossless compressed PDF to ${targetPath} (${newSizeMB} MB)`);
}

const target = process.argv[2];
compressPdf(target).catch(console.error);
