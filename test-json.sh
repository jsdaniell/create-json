if [ -f test.json ]; then
  # Check if the file is valid JSON
  if jq . test.json > /dev/null 2>&1; then
    # Print the value of the key "name"
    jq -r '.name' test.json
  else
    echo "test.json is not valid JSON"
  fi
else
  echo "test.json does not exist"
fi



