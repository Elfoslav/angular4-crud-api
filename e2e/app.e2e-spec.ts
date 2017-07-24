import { Angular4PersonsApiPage } from './app.po';

describe('angular4-persons-api App', () => {
  let page: Angular4PersonsApiPage;

  beforeEach(() => {
    page = new Angular4PersonsApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
