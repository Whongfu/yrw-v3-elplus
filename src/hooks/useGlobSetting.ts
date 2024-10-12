import type { GlobConfig } from '#/global.d';

import { getAppEnvConfig } from '@/utils/env';

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
   VITE_API_URL,
  } = getAppEnvConfig();

  const glob: Readonly<GlobConfig> = {
    apiUrl: VITE_API_URL,
  };
  return glob as Readonly<GlobConfig>;
};