import { resend } from '../lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';
import { ApiResponse } from '../types/ApiResponse';

export const sendVerificationEmail = async (
	username: string,
	verifyCode: string,
	email: string
): Promise<ApiResponse> => {
	try {
		await resend.emails.send({
			to: email,
			from: 'onboarding@resend.dev',
			subject: 'message app: Verification Code',
			react: VerificationEmail({ username, otp: verifyCode }),
		});
		return { success: true, message: 'Verification email sent.' };
	} catch (error) {
		return { success: false, message: 'Error sending verification email.' };
	}
};

export default sendVerificationEmail;
