import { SmartsalonPage } from './app.po';

describe('smartsalon App', function() {
  let page: SmartsalonPage;

  beforeEach(() => {
    page = new SmartsalonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
