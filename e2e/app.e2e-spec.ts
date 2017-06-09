import { BotigaAngPage } from './app.po';

describe('botiga-ang App', () => {
  let page: BotigaAngPage;

  beforeEach(() => {
    page = new BotigaAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
