

run_http_server:
	python3 -m http.server


run_sass_compiler_watchs:
	sass --watch scss/main.scss css/main.css --style compressed