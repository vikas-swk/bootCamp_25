# import the format_address function from the formatting module
from formatting import format_address

address = {
    "address1": "Google London",
    "address2": "6 King's Boulevard",
    "address3": "Kings Cross",
    "town": "London",
    "county": "",
    "post_code": "N1C 4BU",
}

display_address = format_address(address)

print(display_address)
