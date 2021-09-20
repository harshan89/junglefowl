export interface Props {
    shouldRemember: boolean;
    onUsernameChange: (username: string) => void;
    onPasswordChange: (password: string) => void;
    onRememberChange: (remember: boolean) => void;
    onSubmit: (username: string, password: string) => void;
}