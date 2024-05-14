from app import create_app

app = create_app(config_name='development')   # 'development'  # 'development

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001, use_reloader=True, debug=True)
