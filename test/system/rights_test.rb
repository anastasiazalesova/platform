require "application_system_test_case"

class RightsTest < ApplicationSystemTestCase
  setup do
    @right = rights(:one)
  end

  test "visiting the index" do
    visit rights_url
    assert_selector "h1", text: "Rights"
  end

  test "creating a Right" do
    visit rights_url
    click_on "New Right"

    fill_in "Name", with: @right.name
    click_on "Create Right"

    assert_text "Right was successfully created"
    click_on "Back"
  end

  test "updating a Right" do
    visit rights_url
    click_on "Edit", match: :first

    fill_in "Name", with: @right.name
    click_on "Update Right"

    assert_text "Right was successfully updated"
    click_on "Back"
  end

  test "destroying a Right" do
    visit rights_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Right was successfully destroyed"
  end
end
