import service from '@/axios/service'
import { ErrorMessageMode } from '@/axios/types'
import { ILoginParams, ILoginResult } from '@/api/types'

enum Api {
  Login = '/sys/login',
  Codeimg = '/sys/randomImage',
}

/**
 * 获取图形验证码
 */
export function getRandCodeImg() {
  let url = `${Api.Codeimg}/1629428467008`;
  return service.get({ url });
}

/**
 * 登录
 */
export function loginApi(params: ILoginParams, mode: ErrorMessageMode = 'modal') {
  return service.post<ILoginResult>(
    {
      url: Api.Login,
      params,
    }
  );
}