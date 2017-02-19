import { RailsgularFePage } from './app.po';

describe('railsgular-fe App', () => {
  let page: RailsgularFePage;

  beforeEach(() => {
    page = new RailsgularFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
