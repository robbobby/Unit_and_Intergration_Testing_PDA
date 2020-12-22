import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9);
  })
})
describe('App.vue', () => {
  it('should be able to subtract numbers', () => {
  const wrapper = shallowMount(App);
  wrapper.vm.previousTotal = 7;
  wrapper.vm.subtract(4);
  expect(wrapper.vm.runningTotal).to.equal(3);
  })
})
describe('App.vue', () => {
  it('should be able to multiply numbers', () => {
  const wrapper = shallowMount(App);
  wrapper.vm.previousTotal = 3;
  wrapper.vm.multiply(5);
  expect(wrapper.vm.runningTotal).to.equal(15);
  })
})
describe('App.vue', () => {
  it('should be able to divide numbers', () => {
  const wrapper = shallowMount(App);
  wrapper.vm.previousTotal = 21;
  wrapper.vm.divide(7);
  expect(wrapper.vm.runningTotal).to.equal(3);
  })
})
describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => { //ie. clicking 4 then 2 should give 42
  const wrapper = shallowMount(App);
  wrapper.vm.numberClick(8);
  wrapper.vm.numberClick(1);
  expect(wrapper.vm.runningTotal).to.equal(81);
  })
})
  describe('App.vue', () => {
    it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(1);
  }) 
})

  describe('App.vue', () => {
    it('should be able to clear value' ,() => {
    const wrapper = shallowMount(App);
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick(1);
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0);
    expect(wrapper.vm.previousTotal).to.equal(2);
  })
})
  describe('App.vue', () => {
  it('should be able to clear current click', () => {
  const wrapper = shallowMount(App);
  wrapper.vm.numberClick(2);
  wrapper.vm.operatorClick('-');
  wrapper.vm.numberClick(1);
  wrapper.vm.clearClick();
  wrapper.vm.operatorClick('=')
  expect(wrapper.vm.runningTotal).to.equal(2);
  })
})