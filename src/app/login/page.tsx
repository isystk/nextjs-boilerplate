'use client';
import CSRFToken from '@/components/atoms/CSRFToken';
import { Url } from '@/constants/url';
import LaraECLayout from '@/components/templates/LaraECLayout';
import useAppRoot from '@/states/useAppRoot';
import Link from 'next/link';
import TextInput from '@/components/atoms/TextInput';
import { type LoginForm } from '@/services/auth';
import { redirect } from 'next/navigation';

// TODO react-google-recaptcha-v3 が react19では未だサポートされていないのでコメントアウト
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// const ReChaptcha = () => {
//     const [token, setToken] = useState<string>("");
//     const { executeRecaptcha } = useGoogleReCaptcha();
//
//     useEffect(() => {
//         if (!executeRecaptcha) {
//             return;
//         }
//         (async () => {
//             const token = await executeRecaptcha("Contact");
//             setToken(token);
//         })();
//     }, [executeRecaptcha]);
//
//     return <input type="hidden" name="g-recaptcha-response" value={token} />;
// };

const LoginForm = () => {
  const { state, service } = useAppRoot();

  const handleSubmit = async () => {
    if (!service) {
      return;
    }
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const values = {
      email: email.value,
      password: password.value,
    } as LoginForm;
    await service.auth.login(values);
    redirect(Url.HOME);
  };

  if (!state) return <></>;

  return (
    <LaraECLayout title="ログイン">
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="text-center mb-3">
          <form method="GET" action={Url.AUTH_GOOGLE}>
            <button type="submit" className="btn btn-danger">
              Googleアカウントでログイン
            </button>
          </form>
        </div>
        <form method="POST" action={Url.LOGIN} id="login-form">
          <CSRFToken />
          <div className="mx-auto md:w-100">
            <TextInput
              identity="email"
              controlType="email"
              label="メールアドレス"
              autoFocus={true}
              className="mb-5 md:w-100"
            />
            <TextInput
              identity="password"
              controlType="password"
              autoComplete="current-password"
              label="パスワード"
              className="mb-5 md:w-100"
            />
            {/*TODO react-google-recaptcha-v3 が react19では未だサポートされていないのでコメントアウト*/}
            {/*<GoogleReCaptchaProvider*/}
            {/*    reCaptchaKey={*/}
            {/*        process.env.NEXT_PUBLIC_RECAPTCHAV3_SITEKEY + ""*/}
            {/*    }*/}
            {/*    language="ja"*/}
            {/*>*/}
            {/*    <ReChaptcha />*/}
            {/*</GoogleReCaptchaProvider>*/}
            <p>
              <input type="checkbox" id="remember" name="remember" value="1" />{' '}
              <span>Remember Me</span>
            </p>
          </div>
          <div className="mx-auto my-5 border p-3 md:w-100">
            テスト用ユーザ
            <br />
            メールアドレス: test1@test.com
            <br />
            パスワード: password
          </div>
          <div className="mt-3 text-center">
            <button type="button" className="btn btn-primary mr-5" onClick={handleSubmit}>
              ログイン
            </button>
            <Link href={Url.PASSWORD_RESET} className="btn">
              パスワードを忘れた方
            </Link>
          </div>
        </form>
      </div>
    </LaraECLayout>
  );
};

export default LoginForm;
