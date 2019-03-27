import { createLocalVue, mount } from "@vue/test-utils";
import VeeValidate from "vee-validate";
import Form from "@/components/Form.vue";

describe("Form.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VeeValidate);

  it("renders the component", () => {
    const wrapper = mount(Form, {
      localVue
    });
    expect(wrapper.findAll("button").length).toBe(3);
    expect(wrapper.findAll("input[type='checkbox']").length).toBe(3);
  });

  // it("really renders the component", () => {
  //   const wrapper = mount(Form, {
  //     localVue
  //   });
  //   expect(wrapper.findAll("button").length).toBe(3);
  //   expect(wrapper.findAll("input[type='checkbox']").length).toBe(3);
  // });

  // it("initially has no checkboxes checked", () => {
  //   const wrapper = mount(Form, {
  //     localVue
  //   });
  //   // expect(wrapper.vm.confirmations.length).toBe(0);
  //   expect(true).toBe(true);
  // });
});
