import { NgForPage } from './app.po';

describe('ng-for App', function() {
  let page: NgForPage;

  beforeEach(() => {
    page = new NgForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
