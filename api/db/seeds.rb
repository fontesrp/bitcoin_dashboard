ExchangeRate.destroy_all
UserCurrency.destroy_all
Currency.destroy_all
User.destroy_all

ADMIN_EMAIL = 'js@winterfell.gov'
ADMIN_PASS = '123@mudar'
ADMIN_FIAT = %w(USD EUR GBP CAD BRL CNY JPY RUB)
GUEST_EMAIL = 'guest@whatever.com'
GUEST_PASS = '123@mudar'
GUEST_FIAT = %w(USD EUR CAD BRL)

admin = User.create(
  first_name: 'Jon',
  last_name: 'Snow',
  email: ADMIN_EMAIL,
  password: ADMIN_PASS
)

puts "Admin created. Login with #{ADMIN_EMAIL} / #{ADMIN_PASS}"

guest = User.create(
  first_name: 'Guest',
  last_name: 'Guest',
  email: GUEST_EMAIL,
  password: GUEST_PASS
)

puts "Guest created"

fiat_currencies = %w(
  AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB
  BRL BSD BTN BWP BYN BZD CAD CDF CHF CLF CLP CNH CNY COP CRC CUC CUP CVE CZK
  DJF DKK DOP DZD EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD
  HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR
  KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP
  MRO MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR
  PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD SSP STD
  SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND
  VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMW ZWL
)

crypto_currencies = %w(BTC)

crypto_currencies.each do |c|

  crypto = Currency.create(
    symbol: c,
    currency_type: 'crypto'
  )

  fiat_currencies.each do |f|

    fiat = Currency.create(
      symbol: f,
      currency_type: 'fiat'
    )

    ExchangeRate.create(
      buying_currency: crypto,
      selling_currency: fiat,
      rate: 1
    )
  end
end

puts "#{Currency.count} currencies and #{ExchangeRate.count} exchange rates created"

ADMIN_FIAT.each do |f|

  fiat = Currency.find_by symbol: f, currency_type: 'fiat'

  UserCurrency.create currency: fiat, user: admin
end

GUEST_FIAT.each do |f|

  fiat = Currency.find_by symbol: f, currency_type: 'fiat'

  UserCurrency.create currency: fiat, user: guest
end

puts "#{UserCurrency.count} user currencies created"
