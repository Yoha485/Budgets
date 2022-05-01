import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/' });

API.interceptors.request.use((req: any) => {
	if (localStorage.getItem('user')) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user') || '').token}`;
	}

	return req;
});

export const signUp = (formData: AuthFormData) => API.post('users', formData);
export const signIn = (formData: AuthFormData) => API.post('users/login', formData);

export const fetchCategories = () => API.get('category');
export const createCategory = (formData: CreateCategoryForm) => API.post('category', formData);
export const updateCategory = (formData: UpdateCategoryForm, id: number) => API.patch(`category/${id}`, formData);

export const fetchExpenses = () => API.get('expenses');
export const createExpense = (formData: CreateExpenseForm) => API.post('expense', formData);
