import { shallowMount } from '@vue/test-utils'
import HomeComponent from '@/components/home/index.vue'

describe('HomeComponent.vue', () => {
  it('renders ', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeComponent, {
      props: { msg }
    })
    // expect(wrapper.text()).toMatch(msg)
  })
})
