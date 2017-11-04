function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > revenue })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) { return driver.name })
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let matches = []
    for (const key in attribute) {
      matches = driver[key] == attribute[key]
    }
  }
}
