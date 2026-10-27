import type { ImageMetadata } from 'astro';
import { activeFoxLogo, foxLogoVariants } from './fox';

const files = import.meta.glob<ImageMetadata>('../assets/logo/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

interface ProjectLogoSettings {
  filename: string;
  initials: string;
  gridWidth: number;
  gridHeight: number;
  listPadding: number;
  mobilePadding: number;
  modalScale?: number;
}

// Optical sizing accounts for whitespace already included in each source file.
export const projectLogoNames: Record<string, ProjectLogoSettings> = {
  portfolio: { filename: 'portfolio', initials: 'JM', gridWidth: 136, gridHeight: 136, listPadding: 8, mobilePadding: 4 },
  orange: { filename: 'orange', initials: 'OR', gridWidth: 128, gridHeight: 128, listPadding: 9, mobilePadding: 5 },
  anthlabs: { filename: 'anthlabs', modalScale: 1.6, initials: 'AL', gridWidth: 152, gridHeight: 152, listPadding: 3, mobilePadding: 1 },
  enjo: { filename: 'enjo', initials: 'EN', gridWidth: 230, gridHeight: 132, listPadding: 5, mobilePadding: 3 },
  amtta: { filename: 'amtta', modalScale: 1.4, initials: 'AM', gridWidth: 176, gridHeight: 176, listPadding: 0, mobilePadding: 0 },
  osteo: { filename: 'cabinet-osteopathie', modalScale: 1.45, initials: 'CO', gridWidth: 176, gridHeight: 176, listPadding: 0, mobilePadding: 0 },
};

export function getProjectLogo(id: string): ImageMetadata | undefined {
  if (id === 'portfolio') return foxLogoVariants[activeFoxLogo].source;
  const config = projectLogoNames[id];
  if (!config) return undefined;
  for (const extension of ['png', 'webp', 'jpg', 'jpeg', 'avif']) {
    const image = files['../assets/logo/' + config.filename + '.' + extension];
    if (image) return image;
  }
  return undefined;
}
