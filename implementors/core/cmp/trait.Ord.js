(function() {var implementors = {};
implementors['log'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>",];implementors['unicase'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='unicase/struct.UniCase.html' title='unicase::UniCase'>UniCase</a>&lt;T&gt;",];implementors['regex_syntax'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.Lit.html' title='regex_syntax::Lit'>Lit</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.ClassRange.html' title='regex_syntax::ClassRange'>ClassRange</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='regex_syntax/struct.ByteRange.html' title='regex_syntax::ByteRange'>ByteRange</a>",];implementors['libc'] = [];implementors['url'] = ["impl&lt;S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='url/enum.Host.html' title='url::Host'>Host</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['time'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Duration.html' title='time::Duration'>Duration</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Timespec.html' title='time::Timespec'>Timespec</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.SteadyTime.html' title='time::SteadyTime'>SteadyTime</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='time/struct.Tm.html' title='time::Tm'>Tm</a>",];implementors['openssl'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='openssl/bn/struct.BigNum.html' title='openssl::bn::BigNum'>BigNum</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='openssl/ssl/struct.SslContextOptions.html' title='openssl::ssl::SslContextOptions'>SslContextOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='openssl/ssl/struct.SslVerifyMode.html' title='openssl::ssl::SslVerifyMode'>SslVerifyMode</a>",];implementors['regex'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for Char",];implementors['num_bigint'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='num_bigint/enum.Sign.html' title='num_bigint::Sign'>Sign</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors['num_rational'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['num'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a></span>",];implementors['hyper'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/struct.Url.html' title='hyper::Url'>Url</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/header/struct.HttpDate.html' title='hyper::header::HttpDate'>HttpDate</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='hyper/header/struct.Quality.html' title='hyper::header::Quality'>Quality</a>","impl&lt;'a, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='https://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/collections/borrow/trait.ToOwned.html' title='collections::borrow::ToOwned'>ToOwned</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusCode.html' title='hyper::status::StatusCode'>StatusCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/status/enum.StatusClass.html' title='hyper::status::StatusClass'>StatusClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='enum' href='hyper/version/enum.HttpVersion.html' title='hyper::version::HttpVersion'>HttpVersion</a>",];implementors['serde'] = ["impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='serde/bytes/struct.Bytes.html' title='serde::bytes::Bytes'>Bytes</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='serde/bytes/struct.ByteBuf.html' title='serde::bytes::ByteBuf'>ByteBuf</a>",];implementors['afterparty'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];implementors['afterparty'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
