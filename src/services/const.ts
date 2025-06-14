import MainService from '@/services/main';
import { Api } from '@/constants/api';
import ConstState from '@/states/const';

export default class ConstService {
  main: MainService;
  const: ConstState;

  constructor(main: MainService) {
    this.main = main;
    this.const = main.root.const;
  }

  async readConsts() {
    try {
      const response = await fetch(Api.CONST);
      const { data } = await response.json();
      Object.assign(this.const, data);
      this.main.setRootState();
    } catch (e) {
      throw e;
    }
  }
}
