import { StorageService } from '../services';
import debug from './debug';

export function setDebug() {
  const useDebug = StorageService.getUseDebug();

  debug.enabled = (useDebug === null) ? (process.env.REACT_APP_debug as boolean | undefined) ?? false : (useDebug === true);
  debug.filter = (values) => true; // Returns all debug messages.
}
