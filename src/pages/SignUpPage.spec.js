// const SignUpPage = require('./SignUpPage.vue');
// const vtl = require('@testing-library/vue');
// const { render, screen } = vtl;
import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';

it('should have Sign Up header', () => {
    render(SignUpPage);
    const header = screen.queryByRole('heading', { name: 'Sign Up' });
    expect(header).toBeInTheDocument();
})