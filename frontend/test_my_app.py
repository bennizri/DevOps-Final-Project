import pytest
from sel import setup_driver, navigate_to_site, add_item, delete_item

def test_add_and_delete():
    driver = setup_driver()
    navigate_to_site(driver)

    # Test adding an item
    add_item(driver, name="ben", title="london", opinion="very nice place")

    # Verify the add operation here, if possible (e.g., by checking that a new item appears in the list)

    # Test deleting the item
    delete_item(driver)

    # Verify the delete operation here (e.g., by checking that the item is removed from the list)

    driver.quit()
