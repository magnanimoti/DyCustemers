import { DyCustemersPage } from './app.po';

describe('dy-custemers App', () => {
  let page: DyCustemersPage;

  beforeEach(() => {
    page = new DyCustemersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
