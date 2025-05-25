'use client';
import SessionAlert from '@/components/atoms/SessionAlert';
import CSRFToken from '@/components/atoms/CSRFToken';
import LaraECLayout from '@/components/templates/LaraECLayout';
import useAppRoot from '@/states/useAppRoot';

const Verify = () => {
  const { state } = useAppRoot();

  if (!state) return <></>;

  return (
    <LaraECLayout title="メールを確認してください">
      <div className="bg-white p-6 rounded-md shadow-md ">
        <SessionAlert target="resent" />
        確認用リンクが記載されたメールをご確認ください。メールが届いていない場合は{' '}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            const form = document.getElementById('email-form') as HTMLFormElement;
            const evt = document.createEvent('Event');
            evt.initEvent('submit', true, true);
            if (form && form.dispatchEvent(evt)) {
              form.submit();
            }
          }}
        >
          こちら
        </a>{' '}
        から再度リクエストしてください。
        <form
          id="email-form"
          action="/email/verification-notification"
          method="POST"
          style={{ display: 'none' }}
        >
          <CSRFToken />
        </form>
      </div>
    </LaraECLayout>
  );
};

export default Verify;
