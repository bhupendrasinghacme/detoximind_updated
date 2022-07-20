import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.acmeintech.detoximind',
  appName: 'Detoximind',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {

    SplashScreen: {

      launchShowDuration: 0,

      backgroundColor: '#ffffffff',

      launchAutoHide: false,

      androidSplashResourceName: 'launch_splash',

    }

  }
};

export default config;
