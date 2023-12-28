import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'auth',
  "webDir": "out",
  "bundledWebRuntime": false,
  server: {
    androidScheme: 'https'
  },
};

export default config;
