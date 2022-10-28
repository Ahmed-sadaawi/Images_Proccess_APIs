// بسم الله الرحمن الرحيم

import sharp from "sharp";

const resizing = async (w: number, h: number, img: string, outImg: string): Promise<void> => {
  await sharp(img).resize(w, h).toFile(outImg);
};

export default resizing;
