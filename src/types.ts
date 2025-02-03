export interface CommonMetadata {
  id: string;
  userName: string;
  cpuCount: number;
  hostname: string;
  platform: string;
  os: string;
  timeTaken: number;
  branch: string;
  projectName: string;
  repository: string;
  repositoryName: string;
  timestamp: number | null;
  builtAt: string | null;
  totalMemory: number;
  cpuModels: string[];
  cpuSpeed: number[];
  nodeVersion: string;
  v8Version: string;
  commitSha: string;
  customIdentifier: string | null;
}

export interface WebpackBuildData extends CommonMetadata {
  type: 'webpack';
  webpackVersion: string | null;
  compilationHash: string | null;
  nbrOfCachedModules: number;
  nbrOfRebuiltModules: number;
  devFeedback?: DevFeedbackEvent[];
}

export interface DevFeedbackEvent {
  // e.g. "fileChange", "compileStart", "hmrApplied", "domUpdated"
  type: string;
  // The amount of time since some reference point, in milliseconds
  elapsedMs: number;
  // optional, e.g. a file path
  file?: string;
}

export interface ViteBundleStats {
  bootstrapChunkSizeBytes?: number
  bootstrapChunkSizeLimitBytes?: number
}

export interface ViteBuildData extends CommonMetadata {
  type: 'vite';
  viteVersion: string | null;
  bundleStats?: ViteBundleStats
}
