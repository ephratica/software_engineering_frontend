import { mount } from '@vue/test-utils'
import PaymentPage from 'src/views/PaymentView.vue'
import { expect, test } from "vitest";

test('test the PaymentView', () => {
    const $route = {
        path: '/pay?id=3&examId=2'
    }

    const wrapper = mount(PaymentPage, {
        mocks: {
            $route
        }
    })


    expect(wrapper.find('[data-test="payment-value"]').html()).contain('应付金额')
})