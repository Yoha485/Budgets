interface AuthFormData {
	email: string;
	username?: string;
	password: string;
}

interface CreateCategoryForm {
	name: string;
	color: string;
}

interface UpdateCategoryForm {
	name: string;
	color?: string;
}

interface CreateExpenseForm {
	name: string;
	cost: number;
	categoryId: number;
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

type Category = { 
	id?: number;
	name: string;
	color?: string;
}

type DispatchType = (args: UserAction) => UserAction;
