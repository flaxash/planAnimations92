import { PlanAnimations92Page } from './app.po';

describe('plan-animations92 App', () => {
  let page: PlanAnimations92Page;

  beforeEach(() => {
    page = new PlanAnimations92Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
