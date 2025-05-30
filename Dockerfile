FROM httpd:2.4

# カスタムhttpd.confを配置
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

# フォルダ権限の設定
RUN chown -R www-data:www-data /usr/local/apache2/htdocs && \
    chmod -R 755 /usr/local/apache2/htdocs && \
    chmod 644 /usr/local/apache2/conf/httpd.conf