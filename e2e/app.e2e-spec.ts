import { DatepickerdemoPage } from './app.po';

describe('datepickerdemo App', () => {
  let page: DatepickerdemoPage;

  beforeEach(() => {
    page = new DatepickerdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
