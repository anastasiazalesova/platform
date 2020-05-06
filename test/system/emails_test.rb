require "application_system_test_case"

class EmailsTest < ApplicationSystemTestCase
  setup do
    @email = emails(:one)
  end

  test "visiting the index" do
    visit emails_url
    assert_selector "h1", text: "Emails"
  end

  test "creating a Email" do
    visit emails_url
    click_on "New Email"

    fill_in "Body", with: @email.body
    fill_in "Consumer", with: @email.consumer_id
    fill_in "New", with: @email.new
    fill_in "Supplier", with: @email.supplier_id
    fill_in "Title", with: @email.title
    click_on "Create Email"

    assert_text "Email was successfully created"
    click_on "Back"
  end

  test "updating a Email" do
    visit emails_url
    click_on "Edit", match: :first

    fill_in "Body", with: @email.body
    fill_in "Consumer", with: @email.consumer_id
    fill_in "New", with: @email.new
    fill_in "Supplier", with: @email.supplier_id
    fill_in "Title", with: @email.title
    click_on "Update Email"

    assert_text "Email was successfully updated"
    click_on "Back"
  end

  test "destroying a Email" do
    visit emails_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Email was successfully destroyed"
  end
end
