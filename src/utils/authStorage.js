import AsyncStorage from '@react-native-async-storage/async-storage';
class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }
  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token ? token : null;
  }
  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
      console.log('successfully saved the token');
    } catch (e) {
      console.error('Failed to save the access token', e);
    }
  }
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
