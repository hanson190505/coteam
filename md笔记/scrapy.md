## scrapy

### 错误集锦

-  distutils.errors.DistutilsError: Command '['/Users/zhangsha/Desktop/scrapy_learn/venv/bin/python3.7', '-m', 'pip', '--disable-pip-version-check', 'wheel', '--no-deps', '-w', '/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/tmpehgq_n5h', '--quiet', 'incremental>=16.10.1']' returned non-zero exit status 1.
      ----------------------------------------
  ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.

- 要注意看pip安装时候的错误提示,不能看最后的提示

```python
 ERROR: Command errored out with exit status 1:
     command: /Users/zhangsha/Desktop/scrapy_learn/venv/bin/python3.7 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/pip-install-29zu24c0/Twisted/setup.py'"'"'; __file__='"'"'/private/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/pip-install-29zu24c0/Twisted/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/pip-install-29zu24c0/Twisted/pip-egg-info
         cwd: /private/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/pip-install-29zu24c0/Twisted/
    Complete output (33 lines):
    WARNING: The repository located at pypi.douban.com is not a trusted or secure host and is being ignored. If this repository is available via HTTPS we recommend you use HTTPS instead, otherwise you may silence this warning and allow it anyway with '--trusted-host pypi.douban.com'.
    ERROR: Could not find a version that satisfies the requirement incremental>=16.10.1 (from versions: none)
    ERROR: No matching distribution found for incremental>=16.10.1
    Traceback (most recent call last):
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/installer.py", line 128, in fetch_build_egg
        subprocess.check_call(cmd)
      File "/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/subprocess.py", line 347, in check_call
        raise CalledProcessError(retcode, cmd)
    subprocess.CalledProcessError: Command '['/Users/zhangsha/Desktop/scrapy_learn/venv/bin/python3.7', '-m', 'pip', '--disable-pip-version-check', 'wheel', '--no-deps', '-w', '/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/tmpdo79_ym0', '--quiet', 'incremental>=16.10.1']' returned non-zero exit status 1.
    
    During handling of the above exception, another exception occurred:
    
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "/private/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/pip-install-29zu24c0/Twisted/setup.py", line 20, in <module>
        setuptools.setup(**_setup["getSetupArgs"]())
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/__init__.py", line 144, in setup
        _install_setup_requires(attrs)
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/__init__.py", line 139, in _install_setup_requires
        dist.fetch_build_eggs(dist.setup_requires)
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/dist.py", line 721, in fetch_build_eggs
        replace_conflicting=True,
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/pkg_resources/__init__.py", line 782, in resolve
        replace_conflicting=replace_conflicting
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/pkg_resources/__init__.py", line 1065, in best_match
        return self.obtain(req, installer)
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/pkg_resources/__init__.py", line 1077, in obtain
        return installer(requirement)
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/dist.py", line 777, in fetch_build_egg
        return fetch_build_egg(self, req)
      File "/Users/zhangsha/Desktop/scrapy_learn/venv/lib/python3.7/site-packages/setuptools/installer.py", line 130, in fetch_build_egg
        raise DistutilsError(str(e))
    distutils.errors.DistutilsError: Command '['/Users/zhangsha/Desktop/scrapy_learn/venv/bin/python3.7', '-m', 'pip', '--disable-pip-version-check', 'wheel', '--no-deps', '-w', '/var/folders/hb/9tb6vpss6ll5cmd6fj1cnqk40000gn/T/tmpdo79_ym0', '--quiet', 'incremental>=16.10.1']' returned non-zero exit status 1.
    ----------------------------------------
ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.

```

 如果只看最后的提示,会以为是setuptools的错误,其实是中间的error:

```python
ERROR: Could not find a version that satisfies the requirement incremental>=16.10.1 (from versions: none)
ERROR: No matching distribution found for incremental>=16.10.1
```

这里的解决办法就是手动安装 pip install incremental![截屏2020-02-2800.39.24](/Users/zhangsha/Library/Application Support/typora-user-images/截屏2020-02-2800.39.24.png)

![截屏2020-02-2800.39.57](/Users/zhangsha/Library/Application Support/typora-user-images/截屏2020-02-2800.40.50.png)

![截屏2020-02-2800.41.24](/Users/zhangsha/Library/Application Support/typora-user-images/截屏2020-02-2800.41.24.png)

