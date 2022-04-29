interface AuthFormData {
	email: string;
	username?: string;
	password: string;
}

type UserState = {
	id: number;
	email: string;
	username: string;
	password: string;
};

type UserAction = {
	type: string;
	formData: AuthFormData;
};

type DispatchType = (args: UserAction) => UserAction;
