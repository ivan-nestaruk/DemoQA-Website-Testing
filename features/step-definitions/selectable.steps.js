const { When, Then } = require('@wdio/cucumber-framework');
const {expect} = require('chai');
const selectablePage = require('../pageobjects/selectable.page');

Then(/^I should see the Selectable submodule page$/, async () => {
    expect(await browser.getUrl()).is.equal('https://demoqa.com/selectable');
});

When(/^I click on the List tab$/, async () => {
    await selectablePage.listTabItem.click();
}); 

Then(/^I should see the List tab items$/, async () => {
    expect(await selectablePage.listTabContainer.isDisplayed()).is.equal(true);
});

When(/^I click the List item_1$/, async () => {
    await selectablePage.listItem_1.click();
}); 

Then(/^I should see that the List item_1 is selected$/, async () => {
    expect(await selectablePage.listItem_1.getAttribute('class')).to.include('active');
});

When(/^I click the List item_2$/, async () => {
    await selectablePage.listItem_2.click();
}); 

Then(/^I should see that the List item_2 is selected$/, async () => {
    expect(await selectablePage.listItem_2.getAttribute('class')).to.include('active');
});

When(/^I click the List item_3$/, async () => {
    await selectablePage.listItem_3.click();
}); 

Then(/^I should see that the List item_3 is selected$/, async () => {
    expect(await selectablePage.listItem_3.getAttribute('class')).to.include('active');
});

When(/^I click the List item_4$/, async () => {
    await selectablePage.listItem_4.click();
}); 

Then(/^I should see that the List item_4 is selected$/, async () => {
    expect(await selectablePage.listItem_4.getAttribute('class')).to.include('active');
});

Then(/^I should see that the List item_1 is unselected$/, async () => {
    expect(await selectablePage.listItem_1.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the List item_2 is unselected$/, async () => {
    expect(await selectablePage.listItem_2.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the List item_3 is unselected$/, async () => {
    expect(await selectablePage.listItem_3.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the List item_4 is unselected$/, async () => {
    expect(await selectablePage.listItem_4.getAttribute('class')).does.not.include('active');
});

When(/^I click on the Grid tab$/, async () => {
    await selectablePage.gridTabItem.click();
}); 

Then(/^I should see the Grid tab items$/, async () => {
    expect(await selectablePage.gridTabContainer.isDisplayed()).is.equal(true);
});

When(/^I click the One item$/, async () => {
    await selectablePage.gridItemOne.click();
}); 

Then(/^I should see that the One item is selected$/, async () => {
    expect(await selectablePage.gridItemOne.getAttribute('class')).to.include('active');
});

When(/^I click the Two item$/, async () => {
    await selectablePage.gridItemTwo.click();
}); 

Then(/^I should see that the Two item is selected$/, async () => {
    expect(await selectablePage.gridItemTwo.getAttribute('class')).to.include('active');
});

When(/^I click the Three item$/, async () => {
    await selectablePage.gridItemThree.click();
}); 

Then(/^I should see that the Three item is selected$/, async () => {
    expect(await selectablePage.gridItemThree.getAttribute('class')).to.include('active');
});

When(/^I click the Four item$/, async () => {
    await selectablePage.gridItemFour.click();
}); 

Then(/^I should see that the Four item is selected$/, async () => {
    expect(await selectablePage.gridItemFour.getAttribute('class')).to.include('active');
});

When(/^I click the Five item$/, async () => {
    await selectablePage.gridItemFive.click();
}); 

Then(/^I should see that the Five item is selected$/, async () => {
    expect(await selectablePage.gridItemFive.getAttribute('class')).to.include('active');
});

When(/^I click the Six item$/, async () => {
    await selectablePage.gridItemSix.click();
}); 

Then(/^I should see that the Six item is selected$/, async () => {
    expect(await selectablePage.gridItemSix.getAttribute('class')).to.include('active');
});

When(/^I click the Seven item$/, async () => {
    await selectablePage.gridItemSeven.click();
}); 

Then(/^I should see that the Seven item is selected$/, async () => {
    expect(await selectablePage.gridItemSeven.getAttribute('class')).to.include('active');
});

When(/^I click the Eight item$/, async () => {
    await selectablePage.gridItemEight.click();
}); 

Then(/^I should see that the Eight item is selected$/, async () => {
    expect(await selectablePage.gridItemEight.getAttribute('class')).to.include('active');
});

When(/^I click the Nine item$/, async () => {
    await selectablePage.gridItemNine.click();
}); 

Then(/^I should see that the Nine item is selected$/, async () => {
    expect(await selectablePage.gridItemNine.getAttribute('class')).to.include('active');
});

Then(/^I should see that the One item is unselected$/, async () => {
    expect(await selectablePage.gridItemOne.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Two item is unselected$/, async () => {
    expect(await selectablePage.gridItemTwo.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Three item is unselected$/, async () => {
    expect(await selectablePage.gridItemThree.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Four item is unselected$/, async () => {
    expect(await selectablePage.gridItemFour.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Five item is unselected$/, async () => {
    expect(await selectablePage.gridItemFive.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Six item is unselected$/, async () => {
    expect(await selectablePage.gridItemSix.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Seven item is unselected$/, async () => {
    expect(await selectablePage.gridItemSeven.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Eight item is unselected$/, async () => {
    expect(await selectablePage.gridItemEight.getAttribute('class')).does.not.include('active');
});

Then(/^I should see that the Nine item is unselected$/, async () => {
    expect(await selectablePage.gridItemNine.getAttribute('class')).does.not.include('active');
});