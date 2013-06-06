require 'yaml'

arr = Array.new

class ErrorMessage < RuntimeError; end
 
raise ErrorMessage.new "ERROR! File doesn't exsists : #{ARGV[0]}" unless File.exist? ARGV[0]

begin
if ARGV.length == 1
	data 	= YAML.load_file(ARGV[0])	
else
	raise ErrorMessage.new "Invalid arguments specified\nUsage : sample.rb <cfg YAML file> [option]"
end

data.each do |key, value|
	raise ErrorMessage.new "ERROR! the key exists : #{key}" unless ENV[key].nil?
	arr.push "export\s#{key}=#{value}" unless value.instance_of?(Hash)
end

puts arr

rescue SystemExit => e
  if e.instance_of? ErrorMessage
    puts "#{e}(ErrorMessage)"
  else
    puts e
  end
end