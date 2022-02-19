class Currency < ApplicationRecord
  def current_price
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    request = HTTParty.get(url,
      :query => {:slug => self.slug},
      :headers => {
      "X-CMC_PRO_API_KEY" => ENV["API_KEY"],
      "Content-Type" => "application/json"
    })

    res_body = JSON.parse(request.body)["data"]
    respose = res_body[res_body.keys.first]["quote"]["USD"]["price"]
  end

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end
end
